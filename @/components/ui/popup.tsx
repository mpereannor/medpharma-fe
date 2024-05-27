import * as React from "react"
import { cn } from "../../lib/utils"

import { useMediaQuery } from "../../hooks/user-media-query"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer"

interface BaseProps {
  children: React.ReactNode
}

interface RootPopUpProps extends BaseProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface PopUpProps extends BaseProps {
  className?: string
  asChild?: true
}

const desktop = "(min-width: 768px)"

const PopUp = ({ children, ...props }: RootPopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUp = isDesktop ? Dialog : Drawer
  return <PopUp {...props}>{children}</PopUp>
}

const PopUpTrigger = ({ className, children, ...props }: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpTrigger = isDesktop ? DialogTrigger : DrawerTrigger
  return (
    <PopUpTrigger className={className} {...props}>
      {children}
    </PopUpTrigger>
  )
}
const PopUpClose = ({ className, children, ...props }: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpClose = isDesktop ? DialogClose : DrawerClose
  return (
    <PopUpClose className={className} {...props}>
      {children}
    </PopUpClose>
  )
}

const PopUpContent = ( { className, children, ...props }: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpContent = isDesktop ? DialogContent : DrawerContent
  return (
    <PopUpContent className={ className} {...props}>
      {children}
    </PopUpContent>
  )
}

const PopUpDescription = ({
  className,
  children,
  ...props
}: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpDescription = isDesktop ? DialogDescription : DrawerDescription

  return (
    <PopUpDescription className={className} {...props}>
      {children}
    </PopUpDescription>
  )
}
const PopUpHeader = ({ className, children, ...props }: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpHeader = isDesktop ? DialogHeader : DrawerHeader

  return (
    <PopUpHeader className={className} {...props}>
      {children}
    </PopUpHeader>
  )
}


const PopUpTitle = ({ className, children, ...props }: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpTitle = isDesktop ? DialogTitle : DrawerTitle

  return (
    <PopUpTitle className={className} {...props}>
      {children}
    </PopUpTitle>
  )
}

const PopUpBody = ({ className, children, ...props }: PopUpProps) => {
  return (
    <div className={cn("px-4 md:px-0", className)} {...props}>
      {children}
    </div>
  )
}

const PopUpFooter = ({ className, children, ...props }: PopUpProps) => {
  const isDesktop = useMediaQuery(desktop)
  const PopUpFooter = isDesktop ? DialogFooter : DrawerFooter

  return (
    <PopUpFooter className={className} {...props}>
      {children}
    </PopUpFooter>
  )
}

export {
  PopUp,
  PopUpTrigger,
  PopUpClose,
  PopUpContent,
  PopUpDescription,
  PopUpHeader,
  PopUpTitle,
  PopUpBody,
  PopUpFooter,
}
