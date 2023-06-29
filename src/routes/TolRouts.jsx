import { Tol } from "../components/ToolbarRoute";


export function ToolbarRoute() {
  return (
    <>
    <Tol
    onPlayMovie={() => alert('Se reproduce pelicula')}
    onUploadImage={() => alert('Se muestra imagen')} />
    </>
    
  )
}