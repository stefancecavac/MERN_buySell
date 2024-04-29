


const SuccesPopup = ({ setSuccess , quantity }) => {

    return (
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 h-screen flex items-center justify-center transition-opacity duration-300  ">
            <div className="  bg-main w-3/12 h-2/6 flex flex-col rounded ">
                <div className="flex m-5 justify-center items-center gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-success_primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <p className="text-success_primary text-2xl">Success</p>
                </div>
                <p className="text-xl text-primary m-auto">Succesfully added {quantity} products </p>
                <button className="border-2 border-primary bg-primary text-main w-3/6 m-auto rounded" onClick={() => setSuccess(null)}>Continue</button>
            </div>
        </div>
    )
}

export default SuccesPopup