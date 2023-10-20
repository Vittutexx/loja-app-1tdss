import Image from "next/image"
import Link from "next/link"

export default function Meia() {
  return (
    <div>
      <h1>Meia</h1>
      <div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi ipsum dolores voluptatibus suscipit ducimus facilis deserunt, debitis quisquam, quam ullam, sint nemo? Maxime iste corrupti dolorum blanditiis fugit eaque adipisci!</p>
        <p><Link href="/">HOME</Link></p>
        <figure>
          <Image src="/img/meias.jpg" width={400} height={400} alt="Meia" />
          <figcaption>Meia</figcaption>
        </figure>
      </div>
    </div>
  )
}