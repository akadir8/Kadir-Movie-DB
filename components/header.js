import Link from "next/link";
export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Film</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              <a>Dizi</a>
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
            li {
              a {
                display: flex;
                height: 65px;
                align-items: center;
                padding: 0 20px;
                color: teal;
                text-decoration: none;
              }
            }
          }
        `}
      </style>
    </header>
  );
}
