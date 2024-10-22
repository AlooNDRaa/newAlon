import { MdBook, MdBookmarks } from "react-icons/md";
import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
} from "@material-tailwind/react";

const Trainings = () => {
    return (
        <div className="flex flex-col items-start p-6 gap-4">
            <div className="flex items-center gap-2">
                <h2 className="text-4xl font-semibold">Trainings</h2>
                <MdBookmarks size={35} />
            </div>

            <div className="w-[32rem] flex ml-20 mt-10">
                <Timeline>
                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                                <MdBook color="black"/>
                            </TimelineIcon>
                            <h2 className="font-bold">
                                Fundacion Empujar -- SomosCoders
                            </h2>
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                        <h3 className="text-md">
                            Full stack web development
                        </h3>
                        <h4 className="mt-3 font-bold text-sm">
                            2023
                        </h4>
                        </TimelineBody>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineConnector />
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                            <MdBook color="black"/>
                            </TimelineIcon>
                            <h2 className="font-bold">
                                Chicas en Tecnología
                            </h2>                        
                        </TimelineHeader>
                        <TimelineBody className="pb-8">
                        <h3 className="">
                             Leadership program, Data analysis, Introduction to UX.
                        </h3>
                        <h4 className="mt-3 font-bold text-sm">
                            2024
                        </h4>                       
                        </TimelineBody>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineHeader>
                            <TimelineIcon className="p-2">
                            <MdBook color="black"/>
                            </TimelineIcon>
                            <h2 className="font-bold">
                                Semillero digital
                            </h2>                        
                        </TimelineHeader>
                        <TimelineBody>
                        <h3 className="">
                            Ubuntu: Sustainable financing project
                        </h3>
                        <h4 className="mt-3 font-bold text-sm">
                            2024
                        </h4>                 
                         </TimelineBody>
                    </TimelineItem>
                </Timeline>
            </div>
        </div>
    );
};

export default Trainings;
