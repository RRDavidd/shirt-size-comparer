import Figure from "./Figure";
import InputFields from "./InputFields";

export default function SizesCalculator(){
    return (
        <>
        <div className="flex justify-center">
            {/* this will be the person figure to scale */}
            <div className="flex-1">
                <Figure />
            </div>
            {/* this will be the input fields */}
            <div className="flex-1">
                <InputFields />
            </div>
        </div>
        </>
    )
}