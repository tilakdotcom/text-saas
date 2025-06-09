import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-main-100/30 bg-white/80 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg">
        <CardContent className="p-6">
          <h3 className="mb-4 text-base md:text-xl font-semibold text-gray-900">
            Contact Information
          </h3>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-100 text-main-600">
                <Mail className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Email</p>
                <a
                  href="mailto:tsingh99991@gmail.com"
                  className="mt-1 block text-sm text-gray-600 hover:text-main-600"
                >
                  tsingh99991@gmail.com
                </a>
              </div>
            </div>

            

            {/* Address */}
            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-100 text-main-600">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Address</p>
                <p className="mt-1 text-sm text-gray-600">
                  Delhi University
                  <br />
                  Delhi, India
                </p>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-100 text-main-600">
                <Github className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">GitHub</p>
                <a
                  href="https://github.com/tilakdotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-gray-600 hover:text-main-600"
                >
                  github.com/tilakdotcom
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-main-100 text-main-600">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/tilakdotcom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-sm text-gray-600 hover:text-main-600"
                >
                  linkedin.com/in/tilakdotcom
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function FAQInfo() {
  return (
    <Card className="overflow-hidden border-main-100/30 bg-white/80 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-lg">
      <CardContent className="p-6">
        <h3 className="mb-4 text-base sm:text-xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-base font-medium text-gray-900">
              How quickly will I receive a response?
            </h4>
            <p className="mt-1 text-sm text-gray-600">
              We typically respond to all inquiries within 24-48 hours during
              business days.
            </p>
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-900">
              Do you offer custom solutions?
            </h4>
            <p className="mt-1 text-sm text-gray-600">
              Yes! Contact us with your specific requirements, and we&apoc;ll
              work with you to create a tailored solution.
            </p>
          </div>

          <div>
            <h4 className="text-base font-medium text-gray-900">
              How can I request technical support?
            </h4>
            <p className="mt-1 text-sm text-gray-600">
              For technical issues, please include your account details and a
              description of the problem in your message.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
