import Main from "../Main/Main"
import Header from "../Header/Header"


export default function ProtectedRouteData ({ dataUser, ...props }) {

  return (
      <>
        <Header dataUser={dataUser} />
        <Main
          name='main'
          {...props}
        />
      </>
      
  )
}