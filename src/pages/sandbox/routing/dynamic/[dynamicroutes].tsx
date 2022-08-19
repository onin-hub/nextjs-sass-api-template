// this is one of the next hooks , to access the router feature like
// 1.router.push(href)
// 2.router.query.productId
import { useRouter } from "next/router"; 
 
export default function Dynamicrouting() {
    const router = useRouter();
    const dynamicroutes = router.query.dynamicroutes; // dynamicRoutes is the dynamic route name
    // console.log(dynamicroutes);
    return (
        <>
            <h1>Dynamic Routing { dynamicroutes }</h1>
        </>
    )
}