function SignIn() {
    return(
        <div>
            <div>Create account!</div>
            <form>
                <label htmlFor="Name">Name</label>
                 <input
                   type='text'
                   className=""
                   placeHolder='Name'
                 />
                 <label htmlFor="Name">Email</label>
                 <input
                   type='text'
                   className=""
                   placeHolder='Name'
                 />
                 <label htmlFor="Name">Password</label>
                 <input
                   type='text'
                   className=""
                   placeHolder='Name'
                 />
                
            </form>

        </div>
    )
}
export default SignIn;