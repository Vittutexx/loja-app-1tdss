import Image from "next/image";
import Link from "next/link";

export default function Calca(){
    return(
          
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus ullam in ut, excepturi vel. Reprehenderit optio hic rerum nihil doloribus. Quos ipsam expedita veritatis aspernatur quasi, magnam eius odit.</p>
                <p><Link href="/">HOME</Link></p>
                <figure>
                    <Image src="/public/img/calca.jpg" alt="Calça" width={307} height={320}/>
                </figure>
            </div>
    )
}