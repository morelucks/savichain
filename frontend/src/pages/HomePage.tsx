import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../components/ui/card";
import Chart from "../components/components/Chart";
import { SiVirustotal } from "react-icons/si";
import { Button } from "../components/ui/button";
import { MdCreateNewFolder } from "react-icons/md";
import { MdJoinFull } from "react-icons/md";

const HomePage = () => {
  return (
    <div className="p-5 md:p-10 flex flex-col md:flex-row">
      <div className=" w-full md:w-[78%]">
        <Card className="bg-cover bg-[url('src/assets/bg-image.png')] flex flex-row items-center text-white">
          <CardContent className="w-[50%] flex md:items-center justify-center flex-col">
            <CardTitle>Welcome Back!!</CardTitle>
            <CardDescription className="text-2xl md:text-5xl md:my-5">
              Savichain
            </CardDescription>
          </CardContent>
          <CardContent className="w-[50%] flex items-center justify-center flex-col">
            <CardTitle>Available For Withdrawal</CardTitle>
            <CardDescription className="text-2xl md:text-4xl mt-2 md:mt-3 font-semibold">
              $50.000
            </CardDescription>
            <Button className="bg-blue-800 rounded-lg mt-6 md:w-[10rem]">
              Withdraw
            </Button>
          </CardContent>
        </Card>
        {/* balance */}
        <div className="flex flex-row items-center mt-7 justify-between">
          <Card className="flex flex-row items-start w-[48%]  p-8 bg-cover bg-[url('src/assets/Ellipse_Group.png')]">
            <SiVirustotal />
            <div className=" md:ml-4">
              <p className="text-sm"> Group Contribution</p>
              <h2 className="font-semibold text-3xl mt-3">$6000</h2>
            </div>
          </Card>
          <Card className="flex flex-row items-start w-[48%] p-8 bg-cover bg-[url('src/assets/Ellipse_Group.png')]">
            <SiVirustotal />
            <div className=" md:ml-4">
              <p className="text-sm"> My Total Contribution</p>
              <h2 className="font-semibold text-3xl mt-3">$1000</h2>
            </div>
          </Card>
        </div>

        {/* create and join group */}
        <div className="flex flex-row items-center mt-7 justify-between">
          <Button className="flex flex-row items-start w-[48%] p-2 ">
            <MdCreateNewFolder />
            <p className="text-sm ml-3">Create Group</p>
          </Button>
          <Button className="flex flex-row items-start w-[48%] p-2">
            <MdJoinFull />
            <p className="text-sm">Join Group</p>
          </Button>
        </div>
        {/* chart */}
        <Chart />
      </div>

      <div className="w-full md:w-[19%] border border-b-2 md:ml-4 p-4">
        <div className="bg-cover h-[3rem] text-black flex items-center justify-center bg-[url('src/assets/bg-image.png')] text-center rounded-xl overflow-hidden">
          My Group
        </div>

        <div>
          <div className="bg-cover h-[3rem] text-black flex  text-center rounded-xl overflow-hidden">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
