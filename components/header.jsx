import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/" className="a" >
              Film
            </Link>
          </li>
          <li>
            <Link href="/about"className="a" >
              Hakkında
            </Link>
          </li>
          <li>
            <Link href="/blog" className="a" >
              Dizi
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          .header {
            height: 65px;
            background: #fff;
            border-bottom: 1px solid #ddd;
          }
          ul {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </header>
  );
}
