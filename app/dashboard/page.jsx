import { auth } from '@clerk/nextjs'

const DashboardPage = () => {
  const { userId } = auth()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Dashboard</h1>
      <p className="mb-5">
        Welcome to Dashboard. This page shows the personal information of the
        logged-in user.
      </p>
      <p>userId : {userId}</p>
    </div>
  )
}
export default DashboardPage