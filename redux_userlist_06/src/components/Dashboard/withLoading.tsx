
function withLoading(Component:any){

    return (function withLoadingComponent(props:any){
        if(!props.isLoading)
            return (<Component isLoading = {props.isLoading}/>)
        else {
            return <h1>Wait...loading</h1>
        }
    })
}
export default withLoading;