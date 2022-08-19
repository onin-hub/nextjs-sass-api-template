// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request/clicked some button.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
import { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'


export const getStaticProps: GetStaticProps = async (context) => {
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}

function UserlistData({ users }: InferGetStaticPropsType<typeof getStaticProps>) {
    //click the link below in the browser to see the result of the getStaticpaths with getstaticprops
    //file location: /sandbox/[getStaticPaths].tsx

    // The default behavior of the Link component is to push a new URL into the history stack. 
    // You can use the @replace prop to prevent adding a new entry,
    return (
        <>
            <h1>GetStaticProps Sample Code</h1>
            {users.map((user: InferGetStaticPropsType<typeof getStaticProps>) => (
                <Link href={`/sandbox/${user.id}`} key={user.id} replace>
                    <a><h3>{user.name}</h3></a>
                </Link>
            ))}
            <h3>LastONEEE</h3>
        </>
    )
  }
  
  export default UserlistData