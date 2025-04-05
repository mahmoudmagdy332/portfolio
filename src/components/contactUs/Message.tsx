import Form from "./Form"

const Message = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-8 items-center my-10">
    <div className="lg:w-5/12">
        <Form/>
    </div>
    <div className="lg:w-7/12  hidden lg:flex flex-col gap-4">
    <h2 className="text-3xl  xl:text-6xl font-Poppins italic  text-foreground font-[300]">Leave a Message</h2>
        <p className="text-lg text-foreground" > Lorem ipsum dolor sit amet consectetur. Faucibus nulla aliquam orci a pellentesque sagittis venenatis rhoncus. Posuere pulvinar sit aenean maecenas amet nam egestas phasellus quis. Mus risus nec mauris suspendisse quis aliquam etiam vel. Adipiscing diam viverra vulputate sit libero nunc.  </p>

    </div>
</div>
  )
}

export default Message