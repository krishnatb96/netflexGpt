import useNewPleyingMoview from '../hooks/useNewPleyingMoview'
import Header from './Header'
import MainContainer from './MainContainer'


function Browse() {
  useNewPleyingMoview()
  return (
    <div>
      <Header />
   <div className='pt-16'>
    <MainContainer></MainContainer>
   </div>
    </div>
  )
}

export default Browse