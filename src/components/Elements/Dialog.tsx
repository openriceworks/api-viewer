import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import IconButton from "./IconButton";

export interface DialogRef {
  showDialog(): void,
  closeDialog(): void
}

interface DialogProps {
  title: string,
  children: React.ReactNode
}

const Dialog = forwardRef<DialogRef, DialogProps>(
  (props,ref ) => {
    // https://numb86-tech.hatenablog.com/entry/2020/02/29/183517
    const dialogRef: React.MutableRefObject<HTMLDialogElement | null> = useRef(null);
  
    const showDialog = useCallback(() => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    }, []);
  
    const closeDialog = useCallback(() => {
      if (dialogRef.current) {
        dialogRef.current.close();
      }
    }, []);

    useImperativeHandle(ref, () => ({
      showDialog,
      closeDialog
    }))
  
    return (
      <dialog ref={dialogRef} className="rounded bg-white dark:bg-zinc-700 w-1/2 h-1/2 flex-row">
        <div className="h-1/6 relative">
          <h2 className="font-bold text-2xl" >{props.title}</h2>
          <div className="absolute top-0 right-0">
            <IconButton color="red" shape="rounded" onClick={closeDialog}>
              {/* https://heroicons.dev/ */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                </path>
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="h-5/6">
          {
            props.children
          }
        </div>
      </dialog>
    )
  }
)


export default Dialog