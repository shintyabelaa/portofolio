import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartNoAxesColumn } from "lucide-react";
import { StarIcon } from "lucide-react";

type CardProps = {
  icon?: React.ElementType
  rightIcon?: React.ElementType
  company?: string
  title?: string
  description?: string
  achievements?: Array<string>
  startDate?: string
  endDate?: string
}

export function CardSection({
  title,
  description,
  startDate,
  endDate,
  company,
  achievements,
}: CardProps) {
  return (
    <Card size="sm" className="w-full rounded-md hover:border hover:border-primary hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between">
          <div className="flex text-xl font-bold text-primary items-center justify-between">
            {title}
          </div>
          <div className="flex items-center justify-between bg-primary/20 text-primary rounded-full py-2 px-4">
            {startDate} -  {endDate}
          </div>
        </div>
        <div className="font-semibold text-lg">{company}</div>
      </CardHeader>
      <CardContent className="gap-5 flex flex-col">
        <CardDescription className="text-lg">
          {description}
        </CardDescription>
        <div>
          <p className="text-primary text-lg font-semibold ">Key Achievements:</p>
          <ul className="pl-5 text-lg text-primary list-disc">
            {achievements?.map((achievement, index) => (
              <li className="text-muted-foreground" key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
