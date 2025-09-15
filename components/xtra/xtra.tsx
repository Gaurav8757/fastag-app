//  const renderSection = () => {
//     if (
//       !isAuthenticated &&
//       (activeSection === "search" ||
//         activeSection === "recharge" ||
//         activeSection === "transactions")
//     ) {
//       return (
//         <div className="min-h-screen flex items-center justify-center">
//           <Card className="w-full max-w-md">
//             <CardHeader className="text-center">
//               <CardTitle>Login Required</CardTitle>
//               <CardDescription>
//                 Please login to access dashboard features.
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <Button
//                 onClick={() => setIsAuthModalOpen(true)}
//                 className="w-full"
//               >
//                 Login Now
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       );
//     }

//     switch (activeSection) {
//       case "search":
//         return <SearchSection />;
//       case "recharge":
//         return <RechargeSection />;
//       case "transactions":
//         return <TransactionHistory />;
     
//       default:
//         return <LandingSection onGetStarted={() => setIsAuthModalOpen(true)} />;
//     }
//   };