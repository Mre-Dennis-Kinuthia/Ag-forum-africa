import { redirect } from "next/navigation"

export default function EventDetailPage({ params }: { params: { id: string } }) {
  redirect(`/forums/${params.id}`)
}
