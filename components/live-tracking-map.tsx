"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { AlertCircle, ArrowDown, ArrowUp, Clock, RefreshCw, Truck, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/components/ui/use-toast"

// Simulated user and agent coordinates
const USER_LOCATION = { lat: 34.052235, lng: -118.243683 } // Los Angeles
const INITIAL_AGENT_LOCATION = { lat: 34.073, lng: -118.291 } // Starting point ~3 miles away

interface MapPoint {
  lat: number
  lng: number
}

interface RoutePoint {
  lat: number
  lng: number
  timestamp: number
}

interface TrafficCondition {
  severity: "light" | "moderate" | "heavy"
  factor: number
  color: string
}

export function LiveTrackingMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [agentLocation, setAgentLocation] = useState<MapPoint>(INITIAL_AGENT_LOCATION)
  const [routeHistory, setRouteHistory] = useState<RoutePoint[]>([])
  const [estimatedArrival, setEstimatedArrival] = useState("15 minutes")
  const [estimatedSeconds, setEstimatedSeconds] = useState(15 * 60) // 15 minutes in seconds
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const [agentHasArrived, setAgentHasArrived] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(13)
  const [trafficCondition, setTrafficCondition] = useState<TrafficCondition>({
    severity: "moderate",
    factor: 1.2,
    color: "#FFA500", // Orange for moderate traffic
  })
  const { toast } = useToast()

  // Calculate distance between two points in km using Haversine formula
  const calculateDistance = (point1: MapPoint, point2: MapPoint) => {
    const R = 6371 // Earth's radius in km
    const dLat = (point2.lat - point1.lat) * (Math.PI / 180)
    const dLng = (point2.lng - point1.lng) * (Math.PI / 180)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(point1.lat * (Math.PI / 180)) *
        Math.cos(point2.lat * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }

  const simulateTrafficConditions = useCallback(() => {
    // Randomly change traffic conditions occasionally
    if (Math.random() < 0.2) {
      // 20% chance to change traffic conditions
      const conditions: TrafficCondition[] = [
        { severity: "light", factor: 1.0, color: "#4CAF50" }, // Green
        { severity: "moderate", factor: 1.2, color: "#FFA500" }, // Orange
        { severity: "heavy", factor: 1.5, color: "#F44336" }, // Red
      ]
      const newCondition = conditions[Math.floor(Math.random() * conditions.length)]
      setTrafficCondition(newCondition)

      // Notify user of significant traffic changes
      if (newCondition.severity === "heavy" && !agentHasArrived) {
        toast({
          title: "Traffic Update",
          description: "Heavy traffic detected on route. ETA has been adjusted.",
          variant: "default",
        })
      }
    }
  }, [toast, agentHasArrived])

  // Update the agent's location to simulate movement
  const updateAgentLocation = useCallback(() => {
    // Don't update if agent has arrived
    if (agentHasArrived) return

    // Simulate traffic conditions
    simulateTrafficConditions()

    // Calculate current distance
    const currentDistance = calculateDistance(agentLocation, USER_LOCATION)

    // If agent is very close to user, mark as arrived
    if (currentDistance < 0.05) {
      // Less than 50 meters
      setAgentHasArrived(true)
      setEstimatedSeconds(0)
      toast({
        title: "Your rescue agent has arrived!",
        description: "The agent is now at your location.",
        variant: "default",
      })
      return
    }

    // Move agent closer to user (simulate movement)
    // Speed varies based on traffic conditions
    const moveStep = 0.001 / trafficCondition.factor // Adjust speed based on traffic
    const direction = {
      lat: USER_LOCATION.lat - agentLocation.lat,
      lng: USER_LOCATION.lng - agentLocation.lng,
    }

    // Normalize direction vector
    const magnitude = Math.sqrt(direction.lat * direction.lat + direction.lng * direction.lng)
    const normalizedDirection = {
      lat: direction.lat / magnitude,
      lng: direction.lng / magnitude,
    }

    // Calculate new position
    const newLocation = {
      lat: agentLocation.lat + normalizedDirection.lat * moveStep,
      lng: agentLocation.lng + normalizedDirection.lng * moveStep,
    }

    // Update agent location
    setAgentLocation(newLocation)

    // Add to route history
    setRouteHistory((prev) => [...prev, { ...newLocation, timestamp: Date.now() }])

    // Update estimated arrival time
    const remainingDistance = calculateDistance(newLocation, USER_LOCATION)
    const averageSpeed = 30 / trafficCondition.factor // km/h, adjusted for traffic
    const estimatedTimeInMinutes = Math.round((remainingDistance / averageSpeed) * 60)
    const estimatedTimeInSeconds = Math.round(estimatedTimeInMinutes * 60)

    setEstimatedSeconds(estimatedTimeInSeconds)

    if (estimatedTimeInMinutes <= 1) {
      setEstimatedArrival("Less than 1 minute")
    } else {
      setEstimatedArrival(`${estimatedTimeInMinutes} minutes`)
    }
  }, [agentHasArrived, agentLocation, simulateTrafficConditions, toast, trafficCondition.factor])

  useEffect(() => {
    // Don't count down if agent has arrived
    if (agentHasArrived) return

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
      setEstimatedSeconds((prev) => {
        // Don't go below zero
        if (prev <= 1) return 0
        return prev - 1
      })

      setElapsedSeconds((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [agentHasArrived])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }

  // Initialize map and start simulation
  useEffect(() => {
    // Simulate loading the map
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)

      // Add initial route point
      setRouteHistory([{ ...INITIAL_AGENT_LOCATION, timestamp: Date.now() }])

      // Calculate initial ETA
      const initialDistance = calculateDistance(INITIAL_AGENT_LOCATION, USER_LOCATION)
      const initialSpeed = 30 // km/h
      const initialTimeInMinutes = Math.round((initialDistance / initialSpeed) * 60)
      const initialTimeInSeconds = initialTimeInMinutes * 60

      setEstimatedSeconds(initialTimeInSeconds)
      setEstimatedArrival(`${initialTimeInMinutes} minutes`)

      // Start updating agent location every 3 seconds
      const updateInterval = setInterval(updateAgentLocation, 3000)

      return () => clearInterval(updateInterval)
    }, 1500)

    return () => clearTimeout(loadingTimer)
  }, [updateAgentLocation])

  // Handle manual refresh
  const handleRefresh = () => {
    updateAgentLocation()
    toast({
      title: "Location updated",
      description: "Agent location has been refreshed.",
    })
  }

  // Handle zoom controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 1, 18))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 1, 10))
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Truck className="h-5 w-5 text-accent-green" />
          Live Tracking
        </CardTitle>
        <CardDescription>
          {agentHasArrived
            ? "Your rescue agent has arrived at your location"
            : `Estimated arrival in ${estimatedArrival}`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Map container */}
          <div
            ref={mapRef}
            className={`relative h-[350px] w-full rounded-md border border-accent-green/20 bg-bg-lavender overflow-hidden ${
              isLoading ? "animate-pulse" : ""
            }`}
            style={{ transform: `scale(${zoomLevel / 13})`, transformOrigin: "center" }}
          >
            {isLoading ? (
              <div className="flex h-full items-center justify-center">
                <div className="text-text-dark/70">Loading map...</div>
              </div>
            ) : (
              <>
                {/* Simulated map with markers */}
                <div className="absolute inset-0 bg-[#e6e8eb]">
                  {/* User marker */}
                  <div
                    className="absolute flex flex-col items-center"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-green text-text-dark shadow-md">
                      <User className="h-5 w-5" />
                    </div>
                    <div className="mt-1 rounded-md bg-text-dark px-2 py-0.5 text-xs text-white">You</div>
                  </div>

                  {/* Agent marker */}
                  <div
                    className="absolute flex flex-col items-center animate-bounce"
                    style={{
                      left: `${50 + (agentLocation.lng - USER_LOCATION.lng) * 500}%`,
                      top: `${50 + (USER_LOCATION.lat - agentLocation.lat) * 500}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-button-blue text-text-dark shadow-md">
                      <Truck className="h-5 w-5" />
                    </div>
                    <div className="mt-1 rounded-md bg-text-dark px-2 py-0.5 text-xs text-white">Agent</div>
                  </div>

                  {/* Route line */}
                  {routeHistory.length > 1 && (
                    <svg className="absolute inset-0 h-full w-full" style={{ overflow: "visible" }}>
                      <path
                        d={`M ${routeHistory
                          .map((point) => {
                            const x = 50 + (point.lng - USER_LOCATION.lng) * 500
                            const y = 50 + (USER_LOCATION.lat - point.lat) * 500
                            return `${x} ${y}`
                          })
                          .join(" L ")}`}
                        stroke="#7CC6FE"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="5,5"
                      />
                    </svg>
                  )}

                  {/* Arrival notification */}
                  {agentHasArrived && (
                    <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-accent-green px-4 py-2 text-text-dark shadow-lg">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        <span className="font-medium">Your rescue agent has arrived!</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Map controls */}
          <div className="absolute right-3 top-3 flex flex-col gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-bg-lavender shadow-md"
              onClick={handleZoomIn}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Zoom in</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-bg-lavender shadow-md"
              onClick={handleZoomOut}
            >
              <ArrowDown className="h-4 w-4" />
              <span className="sr-only">Zoom out</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 rounded-full bg-bg-lavender shadow-md"
              onClick={handleRefresh}
            >
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">Refresh location</span>
            </Button>
          </div>
        </div>

        {/* Agent info */}
        <div className="mt-4 rounded-lg border border-accent-green/20 bg-bg-lavender p-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-sm font-medium text-text-dark">Agent Name</p>
              <p className="text-sm text-text-dark/70">Mike Johnson</p>
            </div>
            <div>
              <p className="text-sm font-medium text-text-dark">Vehicle</p>
              <p className="text-sm text-text-dark/70">Ford F-150 Tow Truck</p>
            </div>
            <div>
              <p className="text-sm font-medium text-text-dark">ETA</p>
              <p className="text-sm text-text-dark/70">{estimatedArrival}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-text-dark">Phone</p>
              <p className="text-sm text-accent-green">+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent-green" />
              <h3 className="font-medium text-text-dark">Estimated Time of Arrival</h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: trafficCondition.color }} />
              <span className="text-sm text-text-dark/70 capitalize">{trafficCondition.severity} Traffic</span>
            </div>
          </div>

          {agentHasArrived ? (
            <div className="rounded-lg border border-accent-green bg-accent-green/10 p-4 text-center">
              <p className="font-bold text-accent-green">Agent Has Arrived!</p>
            </div>
          ) : (
            <div className="space-y-3 rounded-lg border border-accent-green/20 bg-bg-lavender p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-dark/70">Estimated arrival in:</span>
                <span className="text-xl font-bold text-text-dark">{formatTime(estimatedSeconds)}</span>
              </div>

              <Progress value={(elapsedSeconds / (elapsedSeconds + estimatedSeconds)) * 100} className="h-2" />

              <div className="flex justify-between text-xs text-text-dark/70">
                <span>Started {formatTime(elapsedSeconds)} ago</span>
                <span>{estimatedArrival} remaining</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            toast({
              title: "Message sent",
              description: "Your message has been sent to the agent.",
            })
          }}
        >
          Contact Agent
        </Button>
      </CardFooter>
    </Card>
  )
}
