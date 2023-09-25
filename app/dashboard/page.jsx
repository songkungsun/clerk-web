import { auth } from '@clerk/nextjs'

const DashboardPage = () => {
  const { userId } = auth()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p className="mb-5">
        HI, my name is Songkungsun
      </p>
      <p>userId : {userId}</p>
    </div>
  )
}
export default DashboardPage