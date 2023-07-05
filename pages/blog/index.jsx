import Link from "next/link"
import Head from "next/head"
export default function Home(){
    return <div>
        <Head>
            <title>Dizi</title>
        </Head>
        <h3>Dizi Page</h3>
        <Link href="/">Geri Dön</Link>
    </div>
}