import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="w-full">
      <div className="text-xl font-bold text-black">
        Welcome to Avon Middle High School
      </div>
    </div>
  )
}
