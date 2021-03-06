import React from "react";
import { AdminStats, UserData, PlayerStats } from "../../dashboard/sections/";
import AdminControls from "../controls/adminControls";
import PlayerControls from "../controls/playerControls";
import { useAccount } from "../../../hooks/web3/index";

const DashboardContainer = () => {
  const { account } = useAccount();

  return (
    <main className="container mx-auto px-6 py-8 grid grid-row-3 gap-6">
      <h3 className="text-gray-700 text-3xl font-medium mb-4">Dashboard</h3>
      {account.isAdmin ? <AdminControls /> : <PlayerControls />}
      {account.isAdmin ? <AdminStats /> : <PlayerStats />}
      {account.isAdmin && <UserData />}
    </main>
  );
};

export default DashboardContainer;
