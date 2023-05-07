// Add this Loading File at this level of the hierarchy to understand when Suspence Boundary is initiated and when the Loading.jsx is initiated.

// The Suspence Boundary is initiated forcefylly even the loading.jsx is made at this level of the hierarchy only if the whole
// return statment of the page.jsx in wrapped in a Suspense Boundary.

// In case there is just one Suspense Boundary in the page.jsx at this level of the hierarchy, the loading.jsx will be loaded insted.

const Loading = () => {
    return (
        <div className='loader'>
            <div className="spinner"></div>
        </div>
    )
}

export default Loading
