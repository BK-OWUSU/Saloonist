import { Button } from "./ui/button"
import { Input } from "./ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const BookingForm = () => {
  return (
    <div className="w-full flex flex-col px-10">
        <div className="text-3xl font-semibold flex justify-center items-center py-8">
            Book An Appointment
        </div>

        <main className="flex flex-row justify-between gap-x-4">
            <Input name="name" placeholder="Name" className="border-b-1 border-b-black "/>
            <Input name="phone" placeholder="Phone" className="border-b-1 border-b-black "/>
            <Input name="gender" placeholder="Gender" className="border-b-1 border-b-black "/>

            {/*
            <div className="space-y-2 w-full">             
              <Select 
                name='gender'
              >
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder={userAccountData ? userAccountData?.gender : 'Select gender' } className='text-black'/>
                </SelectTrigger>
                <SelectContent className="bg-white text-black">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </SelectContent>
              </Select>
            </div>
            */}

            <Button>
                Send
            </Button>
        </main>
    </div>
  )
}

export default BookingForm