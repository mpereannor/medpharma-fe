//@ts-nocheck
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from "react-router-dom"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Input } from "@/components/ui/input"
import { toast } from "../../@/components/ui/use-toast"
import { useMutation } from "react-query"

const ConsultationPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Breadcrumb className="hidden md:flex">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={"/"}>Med Pharma</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={"/"}>Consultations</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {" "}
                  <Link to={"/"}> Recent Consultations</Link>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative ml-auto flex-1 md:grow-0">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="min-h-80 flex items-center justify-center mt-8">
          <ConsultationForm />
        </div>
      </div>
    </div>
  )
}

const FormSchema = z.object({
  patient: z.string().min(5, {
    message: "Patient Name must be at least 5 characters.",
  }),
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  healthcareProvider: z.string().min(5, {
    message: "Healthcare Provider must be at least 5 characters.",
  }),
  medicalCondition: z.string().min(5, {
    message: "Medical Condition must be at least 5 characters.",
  }),
  consultationType: z.enum(["INPATIENT", "OUTPATIENT", "REMOTELY"], {
    message: "Consultation Type must be one of the predefined values.",
  }),
})
type FormSchemaType = z.infer<typeof FormSchema>

export function ConsultationForm() {
  const token = localStorage?.getItem("token")

  const mutation = useMutation((bookConsultation) =>
    fetch(`${import.meta.env.VITE_REST_API}/consultations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bookConsultation),
    }).then((res) => res.json())
  )

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      patient: "",
      title: "",
      description: "",
      healthcareProvider: "",
      medicalCondition: "",
      consultationType: "INPATIENT",
    },
  })

  function onSubmit(data: FormSchemaType) {
    mutation.mutate({
      ...data,
      officerId: localStorage?.getItem("userId"),
    })

    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-1/3 space-y-6">
        <FormField
          control={form.control}
          name="patient"
          render={({ field }) => (
            <>
              <FormItem>
                <FormControl>
                  <Input placeholder="Patient Name" {...field} />
                </FormControl>
                <FormDescription>What's the patient's name?</FormDescription>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title" {...field} />
              </FormControl>
              <FormDescription>
                Give a title to this consultation.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Description" {...field} />
              </FormControl>
              <FormDescription>Give more details.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="medicalCondition"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Medical Condition" {...field} />
              </FormControl>
              <FormDescription>Describe the medical condition.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="healthcareProvider"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Healthcare Provider" {...field} />
              </FormControl>
              <FormDescription>Who is the healthcare provider?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="consultationType"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Consultation Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="INPATIENT">In Patient</SelectItem>
                  <SelectItem value="OUTPATIENT">Out Patient</SelectItem>
                  <SelectItem value="REMOTELY">Remotely</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>Select Consultation Type</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Book Consultation</Button>
      </form>
    </Form>
  )
}

export default ConsultationPage
