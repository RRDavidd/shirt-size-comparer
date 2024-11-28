import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store/states';
import {
    setUserHeight,
    setUserNeck,
    setUserChest,
    setUserWaist,
    setShirtNeck,
    setShirtChest,
    setShirtWaist
} from '../store/reducers/sizeReducers';


export default function InputFields(){
    const dispatch = useDispatch<AppDispatch>();
    const userSizes = useSelector((state: RootState) => state.size.userSizes);
    const shirtSizes = useSelector((state: RootState) => state.size.shirtSizes);
    return(
        <>
            <p>Input your height</p>
            <label htmlFor="userHeight" className="block text-xs font-medium text-gray-700"> Height </label>
            <input
                type="number"
                id="userHeight"
                value={userSizes.height}
                onChange={(e) => dispatch(setUserHeight(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
            <p>Input your specific sizes</p>
            <label htmlFor="userNeck" className="block text-xs font-medium text-gray-700"> Neck </label>
            <input
                type="number"
                id="userNeck"
                value={userSizes.neck}
                onChange={(e) => dispatch(setUserNeck(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
            <label htmlFor="userChest" className="block text-xs font-medium text-gray-700"> Chest </label>
            <input
                type="number"
                id="userChest"
                value={userSizes.chest}
                onChange={(e) => dispatch(setUserChest(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
            <label htmlFor="userWaist" className="block text-xs font-medium text-gray-700"> Waist </label>
            <input
                type="number"
                id="userWaist"
                value={userSizes.waist}
                onChange={(e) => dispatch(setUserWaist(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
            <p>Input the desired shirt sizes</p>
            <label htmlFor="shirtNeck" className="block text-xs font-medium text-gray-700"> Neck </label>
            <input
                type="number"
                id="shirtNeck"
                value={shirtSizes.neck}
                onChange={(e) => dispatch(setShirtNeck(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
            <label htmlFor="shirtChest" className="block text-xs font-medium text-gray-700"> Chest </label>
            <input
                type="number"
                id="shirtChest"
                value={shirtSizes.chest}
                onChange={(e) => dispatch(setShirtChest(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
            <label htmlFor="shirtWaist" className="block text-xs font-medium text-gray-700"> Waist </label>
            <input
                type="number"
                id="shirtWaist"
                value={shirtSizes.waist}
                onChange={(e) => dispatch(setShirtWaist(Number(e.target.value)))}
                className="p-2 mt-1 w-full rounded-md border-solid border-2 border-gray-200 shadow-sm sm:text-sm"
            />
        </>
    )
}