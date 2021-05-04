import Link from 'next/link';
import { useRouter} from 'next/router';

export default function Nav() {
    const router = useRouter();

    function getClassName(pageName) {
        if (router.pathname === pageName) {
            return 'inline-block px-4 py-1 mr-1.5 rounded-lg text-white bg-blue-500';
        } else {
            return 'inline-block px-4 py-1 mr-1.5 rounded-lg text-blue-500 bg-gray-100'
        }
    }

    return (
        <div className = 'my-5'>
            <Link href ='/'>
                <a className={getClassName('/')}>Widgets</a>
            </Link>

            <Link href = '/about'>
                <a className={getClassName('/about')}>About</a>
            </Link>
        </div>
    )
}
