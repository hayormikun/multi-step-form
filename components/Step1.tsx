export const Step1 = () => {
  return (
    <form className="w-full flex flex-col">
      <div className="flex flex-col w-full">
        <label
          className="text-lg font-normal text-purplishBlue mb-[10px]"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="mb-[25px] border rounded-md p-[10.5px]"
          type={'text'}
          name="name"
          placeholder="e.g. Stephen King"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          className="text-sm font-normal text-purplishBlue mb-[10px]"
          htmlFor="email"
        >
          Email Address
        </label>
        <input
          className="mb-[25px] border rounded-md p-[10.5px]"
          type={'email'}
          name="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>

      <div className="flex flex-col w-full">
        <label
          className="text-sm font-normal text-purplishBlue mb-[10px]"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          className="mb-[25px] border rounded-md p-[10.5px]"
          type={'tel'}
          name="phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </form>
  )
}
