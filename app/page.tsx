import { createClient } from "@/lib/supabase/server";

import { AppSidebar } from "@/components/app-sidebar";
// import { ChartAreaInteractive } from "@/components/chart-area-interactive";
// import { DataTable } from "@/components/data-table";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const supabase = createClient();

  const { data: profile, error } = await (await supabase)
    .from("v_user_profile")
    .select("*")
    .single();

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }

  console.log("profile", profile);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
          <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mx-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-base font-medium">?</h1>
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="ghost"
                asChild
                size="sm"
                className="hidden sm:flex"
              >
                <a
                  href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="dark:text-foreground"
                >
                  ?
                </a>
              </Button>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {/* Section Cards */}
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Total Revenue</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      $1,250.00
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconTrendingUp />
                        +12.5%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Trending up this month{" "}
                      <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Visitors for the last 6 months
                    </div>
                  </CardFooter>
                </Card>
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>New Customers</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      1,234
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconTrendingDown />
                        -20%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Down 20% this period{" "}
                      <IconTrendingDown className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Acquisition needs attention
                    </div>
                  </CardFooter>
                </Card>
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Active Accounts</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      45,678
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconTrendingUp />
                        +12.5%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Strong user retention{" "}
                      <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Engagement exceed targets
                    </div>
                  </CardFooter>
                </Card>
                <Card className="@container/card">
                  <CardHeader>
                    <CardDescription>Growth Rate</CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                      4.5%
                    </CardTitle>
                    <CardAction>
                      <Badge variant="outline">
                        <IconTrendingUp />
                        +4.5%
                      </Badge>
                    </CardAction>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-1.5 text-sm">
                    <div className="line-clamp-1 flex gap-2 font-medium">
                      Steady performance increase{" "}
                      <IconTrendingUp className="size-4" />
                    </div>
                    <div className="text-muted-foreground">
                      Meets growth projections
                    </div>
                  </CardFooter>
                </Card>
              </div>

              {/*
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
              */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
