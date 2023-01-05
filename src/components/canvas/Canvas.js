import { useRef, useState, useEffect } from "react";
import './Canvas.css'

const Canvas = () => {
    const canvasRef = useRef();
    const contextRef = useRef();

    const [ctx, setCtx] = useState();
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(
        () => {
            const canvas = canvasRef.current;
            canvas.width = 1900;
            canvas.height = 1060;

            const context = canvas.getContext("2d");
            context.strokeStyle = "black";
            context.lineWidth = 2.5;
            contextRef.current = context;

            setCtx(context)
        }, []
    );

    const startDrawing = ({nativeEvent}) => {
        console.log(nativeEvent)
        setIsDrawing(true);
    }

    const finishDrawing = ({nativeEvent}) => {
        console.log(nativeEvent)
        setIsDrawing(false);
    }

    const drawing = ({nativeEvent}) => {
        const { offsetX, offsetY } = nativeEvent;

        if(ctx) {
            if(!isDrawing) {
                ctx.beginPath();
                ctx.moveTo(offsetX, offsetY);
            } else {
                ctx.lineTo(offsetX, offsetY);
                ctx.stroke();
            }
        }
    }

    return(
        <div className="canvas_wrapper">
            <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={drawing}
            onMouseLeave={finishDrawing}
            onTouchStart={startDrawing}
            onTouchEnd={finishDrawing}
            onTouchMove={drawing}
            onTouchCancel={finishDrawing}
            />
        </div>
    )
}

export default Canvas;