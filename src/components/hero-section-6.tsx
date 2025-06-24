
'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight, Mail, SendHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

export function HeroSection() {
    return (
        <>
            <main>
                <section className="overflow-hidden">
                    <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-32 pt-32 lg:pt-40">
                        <div className="lg:flex lg:items-center lg:gap-16">
                            <div className="relative z-10 mx-auto max-w-xl text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <a
                                    href="/"
                                    className="rounded-lg mx-auto flex w-fit items-center gap-2 border p-1 pr-3 lg:ml-0">
                                    <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">New</span>
                                    <span className="text-sm">Premium Valet Services</span>
                                    <span className="bg-(--color-border) block h-4 w-px"></span>

                                    <ArrowRight className="size-4" />
                                </a>

                                <h1 className="mt-10 text-balance text-4xl font-bold md:text-5xl xl:text-6xl">Professional Valet Parking Solutions</h1>
                                <p className="mt-8 text-lg">Experience seamless valet services for your events. Professional, insured attendants providing luxury parking solutions for weddings, corporate events, and private gatherings.</p>

                                <div>
                                    <form
                                        action=""
                                        className="mx-auto my-10 max-w-sm lg:my-12 lg:ml-0 lg:mr-auto">
                                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[1rem] border pr-1 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
                                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                                            <input
                                                placeholder="Your email address"
                                                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                                type="email"
                                            />

                                            <div className="md:pr-1.5 lg:pr-0">
                                                <Button
                                                    aria-label="submit"
                                                >
                                                    <span className="hidden md:block">Get Started</span>
                                                    <SendHorizontal
                                                        className="relative mx-auto size-5 md:hidden"
                                                        strokeWidth={2}
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </form>

                                    <ul className="list-inside list-disc space-y-2">
                                        <li>Fully Insured</li>
                                        <li>Professional Staff</li>
                                        <li>24/7 Availability</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-0 -mx-6 rounded-3xl p-3 lg:col-span-3">
                            <div aria-hidden className="absolute z-[1] inset-0 bg-gradient-to-r from-background from-35%" />
                            <div className="relative">
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                >
                                    <source src="https://cdn.pixabay.com/video/2023/05/15/163068-829226678_large.mp4" type="video/mp4" />
                                    <source src="https://cdn.pixabay.com/video/2022/07/14/122842-728764437_large.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
