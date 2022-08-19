import { useRouter } from "next/router";

export default function Custom500() {
    const router = useRouter();
    const { routeparams = []} = router.query
    console.log(routeparams)
    
        //CATCH ALL ROUTES
    /**
     * you can use this in multiple params in router
     * example: http://localhost:3000/docs/param1/param2
     * */


    /**
     * you can use double bracket [[]].js
     * if no params get. The condition @!routeparams will be execute and not display 404 page.
     */

    //normal if statement
    // if (!routeparams) {
    //     return null
    // } else if (routeparams.length === 2) {
    //     return <h1>Viewing doc for feature {routeparams[0]} and concept {routeparams[1]}</h1>
    // } else if (routeparams.length === 1) {
    //     return <h1>Viewing doc for feature {routeparams[0]}</h1>
    // } else {
    //     return <><h1>Catch All Routes:</h1> <h2>you exceed routes params</h2></>
    // }

    //using GUARD CLAUSE conditional statement
    if (!routeparams) return <h1>This is the Doc Page</h1>
    if (routeparams.length === 2) return <h1>Viewing doc for feature {routeparams[0]} and concept {routeparams[1]}</h1>
    if (routeparams.length === 1) return <h1>Viewing doc for feature {routeparams[0]}</h1>
    return <><h1>Catch All Routes:</h1> <h2>you exceed routes params</h2></>
   
}