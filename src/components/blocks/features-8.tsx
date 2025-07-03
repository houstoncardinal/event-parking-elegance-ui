import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users } from 'lucide-react'

export function Features() {
    return (
        <section className="relative bg-gradient-to-br from-black via-slate-900 to-black py-20 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
                {/* Section Title */}
                <div className="mb-14 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-400 drop-shadow-lg">
                        Why Choose Event Parking Services <span className="text-yellow-300">By Cardinal?</span>
                    </h2>
                    <div className="w-24 h-1 mx-auto mt-4 mb-4 bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 rounded-full"></div>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
                        Discover the premium difference: luxury valet, real-time tracking, and VIP service for every guest and every event.
                    </p>
                </div>
                <div className="relative z-10 grid grid-cols-6 gap-6">
                    <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 bg-black/90 border border-yellow-300/60 shadow-xl shadow-yellow-200/10 transition-transform hover:scale-105 hover:shadow-yellow-400/20 duration-300">
                        <CardContent className="relative m-auto size-fit pt-6">
                            <div className="relative flex h-24 w-56 items-center">
                                {/* Gold parking icon */}
                                <svg className="absolute left-0 top-0 w-16 h-16 text-yellow-400 drop-shadow-lg" fill="none" viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="4" fill="#fff8e1" /><text x="24" y="32" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#eab308">P</text></svg>
                                <span className="mx-auto block w-fit text-5xl font-extrabold text-yellow-400 drop-shadow-lg">Valet</span>
                            </div>
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white drop-shadow-lg">Professional Attendants</h2>
                        </CardContent>
                    </Card>
                    <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-black/90 border border-yellow-300/60 shadow-xl shadow-yellow-200/10 transition-transform hover:scale-105 hover:shadow-yellow-400/20 duration-300">
                        <CardContent className="pt-6">
                            <div className="relative mx-auto flex aspect-square size-32 rounded-full border-4 border-yellow-400 bg-yellow-50 before:absolute before:-inset-2 before:rounded-full before:border dark:border-yellow-600/40 dark:before:border-yellow-600/10">
                                <svg className="m-auto h-fit w-24" viewBox="0 0 48 48" fill="none"><rect x="8" y="20" width="32" height="16" rx="4" fill="#fde68a" stroke="#eab308" strokeWidth="2"/><circle cx="16" cy="36" r="3" fill="#eab308"/><circle cx="32" cy="36" r="3" fill="#eab308"/><rect x="20" y="24" width="8" height="4" rx="2" fill="#eab308"/></svg>
                            </div>
                            <div className="relative z-10 mt-6 space-y-2 text-center">
                                <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-lg">Real-Time Vehicle Tracking</h2>
                                <p className="text-gray-100 text-base drop-shadow">Guests can check valet status and request their car from their phone.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-black/90 border border-yellow-300/60 shadow-xl shadow-yellow-200/10 transition-transform hover:scale-105 hover:shadow-yellow-400/20 duration-300">
                        <CardContent className="pt-6">
                            <div className="pt-6 lg:px-6 flex justify-center">
                                <Shield className="w-16 h-16 text-yellow-400 drop-shadow-lg" strokeWidth={2} />
                            </div>
                            <div className="relative z-10 mt-6 space-y-2 text-center">
                                <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-lg">Fully Insured & Secure</h2>
                                <p className="text-gray-100 text-base drop-shadow">$2M liability coverage for total peace of mind at your event.</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative col-span-full overflow-hidden lg:col-span-3 bg-black/90 border border-yellow-300/60 shadow-xl shadow-yellow-200/10 transition-transform hover:scale-105 hover:shadow-yellow-400/20 duration-300">
                        <CardContent className="grid pt-6 sm:grid-cols-2">
                            <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                <div className="relative flex aspect-square size-12 rounded-full border-4 border-yellow-400 bg-yellow-50 before:absolute before:-inset-2 before:rounded-full before:border dark:border-yellow-600/40 dark:before:border-yellow-600/10">
                                    <svg className="m-auto w-8 h-8" fill="none" viewBox="0 0 32 32"><rect x="4" y="12" width="24" height="8" rx="2" fill="#fde68a" stroke="#eab308" strokeWidth="2"/><text x="16" y="20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#eab308">Sign</text></svg>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-lg">Custom Event Signage</h2>
                                    <p className="text-gray-100 text-base drop-shadow">Branded, elegant signage to guide and impress your guests.</p>
                                </div>
                            </div>
                            <div className="text-yellow-200 font-semibold text-center drop-shadow-lg italic flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24"><path d="M7 17h2v-6H5v2h2v4zm8 0h2v-6h-4v2h2v4z" fill="currentColor"/></svg>
                                “The signage made our event feel truly VIP!”
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="relative col-span-full overflow-hidden lg:col-span-3 bg-black/90 border border-yellow-300/60 shadow-xl shadow-yellow-200/10 transition-transform hover:scale-105 hover:shadow-yellow-400/20 duration-300">
                        <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                            <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                <div className="relative flex aspect-square size-12 rounded-full border-4 border-yellow-400 bg-yellow-50 before:absolute before:-inset-2 before:rounded-full before:border dark:border-yellow-600/40 dark:before:border-yellow-600/10">
                                    <Users className="m-auto size-6 text-yellow-600" strokeWidth={2} />
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-lg">VIP & Shuttle Services</h2>
                                    <p className="text-gray-100 text-base drop-shadow">Special options for high-profile guests and large events.</p>
                                </div>
                            </div>
                            <div className="text-yellow-200 font-semibold text-center drop-shadow-lg italic flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24"><path d="M7 17h2v-6H5v2h2v4zm8 0h2v-6h-4v2h2v4z" fill="currentColor"/></svg>
                                “Our VIPs loved the dedicated shuttle!”
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
