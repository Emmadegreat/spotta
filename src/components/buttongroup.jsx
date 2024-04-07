import React,{useState} from 'react'

const ButtonGroup = ({buttons}) => {
    const [startindex, setStartindex] = useState(0)

    const maxButtonLarge = 13;
    const maxButtonSmall = 5

    const showButton = () => {
        const maxButton = window.innerWidth >= 768 ? maxButtonLarge : maxButtonSmall;
        return buttons.slice(startindex, startindex + maxButton).map((button, index) => (
            <button
                key={index}
                className='w-[100%] text-[0.6rem] p-1 text-[#000] bg-white mr-1 rounded border-[1px] border-[#d8d7d7]'
            >
                {button}
            </button>
        ));
    }

    const handleNextBtn = () => {
        const maxButton = window.innerWidth >= 768 ? maxButtonLarge : maxButtonSmall;
        setStartindex(startindex + maxButton)
        if (startindex + maxButton >= buttons.length) {
            setStartindex(0)
        }
    }

    return (
        <div className='flex items-center pt-2'>
            <div className='flex justify-around py-2 mr-1 w-full'>
                {showButton()}
            </div>

            <span onClick={handleNextBtn} className='bg-white w-8 h-8 cursor-pointer rounded-full text-[1.3rem] text-center'>&gt;</span>
        </div>
    )
}

export default ButtonGroup