/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"
import { Card, DivImg } from "./style"

export default function RestaurantCard({ info }) {
  const { image, name, id } = info
  const router = useRouter()

  const handleClick = () => router.push(`/restaurant/${id}`)

  return (
    <Card onClick={() => handleClick()}>
      <DivImg>
        <img src={image} alt={name} />
      </DivImg>
      <p>{name}</p>
    </Card>
  )
}