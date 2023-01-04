
export const Step1 = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="mx-auto justify-center align-middle">
        <form>
          <div className="flex flex-col w-full">
            <label htmlFor="">Name</label>
            <input type={"text"} placeholder="e.g. Stephen King" />
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="">Email Address</label>
            <input type={"email"}  placeholder="e.g. stephenking@lorem.com"/>
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="">Phone Number</label>
            <input type={"tel"} placeholder="e.g. +1 234 567 890"/>
          </div>

        </form>
      </div>
    </div>
  )
}
