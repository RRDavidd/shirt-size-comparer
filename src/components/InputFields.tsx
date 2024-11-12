
export default function InputFields(){
    return(
        <>
            <p>Input your height</p>
                <label htmlFor="height" className="block text-xs font-medium text-gray-700"> Height </label>
                <input
                    type="text"
                    id="height"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
                <p>Input your specific sizes</p>
                <label htmlFor="neck" className="block text-xs font-medium text-gray-700"> Neck </label>
                <input
                    type="text"
                    id="neck"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
                <label htmlFor="chest" className="block text-xs font-medium text-gray-700"> Chest </label>
                <input
                    type="text"
                    id="chest"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
                <label htmlFor="waist" className="block text-xs font-medium text-gray-700"> Waist </label>
                <input
                    type="text"
                    id="waist"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
                <p>Input the desired shirt sizes</p>
                <label htmlFor="neck" className="block text-xs font-medium text-gray-700"> Neck </label>
                <input
                    type="text"
                    id="neck"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
                <label htmlFor="chest" className="block text-xs font-medium text-gray-700"> Chest </label>
                <input
                    type="text"
                    id="chest"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
                <label htmlFor="waist" className="block text-xs font-medium text-gray-700"> Waist </label>
                <input
                    type="text"
                    id="waist"
                    placeholder=""
                    className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
                />
        </>
    )
}