/*

    This Loading.jsx file is always a server component file , we can forcefully use it inside the Client Side Component/Page
    but importing it there and using it on any request.

*/


const Loading = () => {
    return (
        <div className='loader'>
            <div className="spinner"></div>
        </div>
    )
}

export default Loading
