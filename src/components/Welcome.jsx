function Welcome(props) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="mb-2 text-6xl font-bold font-karla text-dark-blue">Quizzical</h1>
            <p className="mb-8 text-2xl text-center font-inter text-dark-blue">Test your knowledge</p>
            <button onClick={props.startNewGame} className="px-16 py-4 font-medium text-white rounded-2xl bg-purple-blue font-inter pointer">Start quiz</button>
        </div>
    )
}

export default Welcome