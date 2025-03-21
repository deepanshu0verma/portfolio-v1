import { Flip, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const showErrorToast = (text) => {
  toast.error(text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Flip,
  })
}

export const showSuccessToast = (text) => {
  console.log('Showing error toast:', text)
  toast.success(text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Flip,
  })
}

export { ToastContainer }