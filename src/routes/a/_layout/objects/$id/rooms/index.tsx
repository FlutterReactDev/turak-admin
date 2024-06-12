import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/a/_layout/objects/$id/rooms/')({
  component: () => <div>Hello /a/_layout/objects/$id/rooms/!</div>
})