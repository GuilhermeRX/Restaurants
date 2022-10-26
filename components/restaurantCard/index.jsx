/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router"

export default function RestaurantCard({ info }) {
  const { image, name, id } = info
  const router = useRouter()

  const handleClick = () => router.push(`/restaurant/${id}`)

  return (
    <div onClick={() => handleClick()}>
      <div>
        <img src={image} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  )
}