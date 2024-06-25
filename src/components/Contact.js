const Contact = () => {
    return <div className="text-center border border-lime-500 rounded my-20 mx-64 p-10 bg-lime-50">
        <h2 className="text-xl font-bold pb-10">Contact Us</h2>
        <div>
            <label> Name: </label>
            <input type="text" placeholder="Enter your name" className="border m-3 p-2 rounded border-lime-500 w-[30rem]" />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" className="border m-3 p-2 rounded border-lime-500 w-[30rem]" />
        </div>
        <button type="submit" className="bg-transparent rounded border border-lime-500 hover:bg-lime-300 hover:text-white px-6 py-2 m-4">Submit</button>
    </div>
}

export default Contact;