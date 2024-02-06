const Error = ({log = null}) =>{
    return (
        !log ? null :
        <div className="error">
            <h1>{log.status}</h1>
            <p>{log.data.msg}</p>
        </div> 
    )
}

export default Error;