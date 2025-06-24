
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
  id: number;
  label: string;
  subMenus?: {
    title: string;
    items: {
      label: string;
      description: string;
      icon: React.ElementType;
    }[];
  }[];
  link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
  items: MegaMenuItem[];
  className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
  ({ items, className, ...props }, ref) => {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);
    const [isHover, setIsHover] = React.useState<number | null>(null);

    const handleHover = (menuLabel: string | null) => {
      setOpenMenu(menuLabel);
    };

    return (
      <ul
        ref={ref}
        className={`relative flex items-center space-x-0 ${className || ""}`}
        {...props}
      >
        {items.map((navItem) => (
          <li
            key={navItem.label}
            className="relative"
            onMouseEnter={() => handleHover(navItem.label)}
            onMouseLeave={() => handleHover(null)}
          >
            {navItem.link ? (
              <a
                href={navItem.link}
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm font-medium transition-colors duration-300 hover:text-blue-600"
              >
                <span>{navItem.label}</span>
              </a>
            ) : (
              <button
                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm font-medium transition-colors duration-300 hover:text-blue-600 group"
                onMouseEnter={() => setIsHover(navItem.id)}
                onMouseLeave={() => setIsHover(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      openMenu === navItem.label ? "rotate-180" : ""
                    }`}
                  />
                )}
                {(isHover === navItem.id || openMenu === navItem.label) && (
                  <motion.div
                    layoutId="hover-bg"
                    className="absolute inset-0 size-full bg-blue-600/10 rounded-lg"
                  />
                )}
              </button>
            )}

            <AnimatePresence>
              {openMenu === navItem.label && navItem.subMenus && (
                <div className="absolute left-0 top-full w-auto pt-2 z-50">
                  <motion.div
                    className="w-max border border-gray-200 bg-white/95 backdrop-blur-lg p-6 shadow-xl"
                    style={{
                      borderRadius: 12,
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex w-fit shrink-0 space-x-12 overflow-hidden">
                      {navItem.subMenus.map((sub) => (
                        <motion.div layout className="w-full min-w-[200px]" key={sub.title}>
                          <h3 className="mb-4 text-sm font-semibold text-black font-poppins">
                            {sub.title}
                          </h3>
                          <ul className="space-y-4">
                            {sub.items.map((item) => {
                              const Icon = item.icon;
                              return (
                                <li key={item.label}>
                                  <a
                                    href="#"
                                    className="flex items-start space-x-3 group hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200"
                                  >
                                    <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-blue-200 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                      <Icon className="h-4 w-4 flex-none" />
                                    </div>
                                    <div className="w-max leading-5">
                                      <p className="shrink-0 text-sm font-medium text-black group-hover:text-black">
                                        {item.label}
                                      </p>
                                      <p className="shrink-0 text-xs text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    );
  }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
