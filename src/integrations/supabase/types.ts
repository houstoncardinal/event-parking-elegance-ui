export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      clients: {
        Row: {
          address: string | null
          contact_person: string | null
          contract_end_date: string | null
          contract_start_date: string | null
          created_at: string
          email: string | null
          id: string
          location: string | null
          monthly_value: number | null
          name: string
          next_service: string | null
          notes: string | null
          phone: string | null
          rating: number | null
          services: string[] | null
          status: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          contact_person?: string | null
          contract_end_date?: string | null
          contract_start_date?: string | null
          created_at?: string
          email?: string | null
          id?: string
          location?: string | null
          monthly_value?: number | null
          name: string
          next_service?: string | null
          notes?: string | null
          phone?: string | null
          rating?: number | null
          services?: string[] | null
          status?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          contact_person?: string | null
          contract_end_date?: string | null
          contract_start_date?: string | null
          created_at?: string
          email?: string | null
          id?: string
          location?: string | null
          monthly_value?: number | null
          name?: string
          next_service?: string | null
          notes?: string | null
          phone?: string | null
          rating?: number | null
          services?: string[] | null
          status?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          attachments: Json | null
          client_id: string | null
          client_name: string | null
          created_at: string
          description: string | null
          end_date: string | null
          estimated_completion: string | null
          id: string
          location: string | null
          name: string
          notes: string | null
          priority: string | null
          progress: number | null
          project_type: string | null
          project_value: number | null
          services_required: string[] | null
          start_date: string | null
          status: string | null
          team_members: string[] | null
          updated_at: string
        }
        Insert: {
          attachments?: Json | null
          client_id?: string | null
          client_name?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          estimated_completion?: string | null
          id?: string
          location?: string | null
          name: string
          notes?: string | null
          priority?: string | null
          progress?: number | null
          project_type?: string | null
          project_value?: number | null
          services_required?: string[] | null
          start_date?: string | null
          status?: string | null
          team_members?: string[] | null
          updated_at?: string
        }
        Update: {
          attachments?: Json | null
          client_id?: string | null
          client_name?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          estimated_completion?: string | null
          id?: string
          location?: string | null
          name?: string
          notes?: string | null
          priority?: string | null
          progress?: number | null
          project_type?: string | null
          project_value?: number | null
          services_required?: string[] | null
          start_date?: string | null
          status?: string | null
          team_members?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          address: string | null
          certifications: string[] | null
          created_at: string
          date_of_birth: string | null
          department: string | null
          email: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          employee_id: string
          employment_status: string
          employment_type: string
          first_name: string
          hire_date: string | null
          hourly_rate: number | null
          id: string
          last_name: string
          location: string | null
          notes: string | null
          phone: string | null
          position: string
          salary: number | null
          skills: string[] | null
          termination_date: string | null
          updated_at: string
        }
        Insert: {
          address?: string | null
          certifications?: string[] | null
          created_at?: string
          date_of_birth?: string | null
          department?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          employee_id: string
          employment_status?: string
          employment_type?: string
          first_name: string
          hire_date?: string | null
          hourly_rate?: number | null
          id?: string
          last_name: string
          location?: string | null
          notes?: string | null
          phone?: string | null
          position: string
          salary?: number | null
          skills?: string[] | null
          termination_date?: string | null
          updated_at?: string
        }
        Update: {
          address?: string | null
          certifications?: string[] | null
          created_at?: string
          date_of_birth?: string | null
          department?: string | null
          email?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          employee_id?: string
          employment_status?: string
          employment_type?: string
          first_name?: string
          hire_date?: string | null
          hourly_rate?: number | null
          id?: string
          last_name?: string
          location?: string | null
          notes?: string | null
          phone?: string | null
          position?: string
          salary?: number | null
          skills?: string[] | null
          termination_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      form_submissions: {
        Row: {
          id: string
          form_type: string
          status: string
          priority: string
          first_name: string | null
          last_name: string | null
          email: string | null
          phone: string | null
          company: string | null
          event_type: string | null
          event_date: string | null
          event_location: string | null
          guest_count: number | null
          start_time: string | null
          end_time: string | null
          attendants_needed: number | null
          special_requests: string | null
          budget_range: string | null
          message: string | null
          source_page: string | null
          utm_source: string | null
          utm_medium: string | null
          utm_campaign: string | null
          admin_notes: string | null
          assigned_to: string | null
          created_at: string
          updated_at: string
          contacted_at: string | null
          responded_at: string | null
        }
        Insert: {
          id?: string
          form_type: string
          status?: string
          priority?: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          phone?: string | null
          company?: string | null
          event_type?: string | null
          event_date?: string | null
          event_location?: string | null
          guest_count?: number | null
          start_time?: string | null
          end_time?: string | null
          attendants_needed?: number | null
          special_requests?: string | null
          budget_range?: string | null
          message?: string | null
          source_page?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          admin_notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
          contacted_at?: string | null
          responded_at?: string | null
        }
        Update: {
          id?: string
          form_type?: string
          status?: string
          priority?: string
          first_name?: string | null
          last_name?: string | null
          email?: string | null
          phone?: string | null
          company?: string | null
          event_type?: string | null
          event_date?: string | null
          event_location?: string | null
          guest_count?: number | null
          start_time?: string | null
          end_time?: string | null
          attendants_needed?: number | null
          special_requests?: string | null
          budget_range?: string | null
          message?: string | null
          source_page?: string | null
          utm_source?: string | null
          utm_medium?: string | null
          utm_campaign?: string | null
          admin_notes?: string | null
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
          contacted_at?: string | null
          responded_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "team_members"
            referencedColumns: ["id"]
          }
        ]
      }
      support_tickets: {
        Row: {
          id: string
          ticket_number: string
          title: string
          description: string
          status: string
          priority: string
          category: string
          customer_name: string
          customer_email: string
          customer_phone: string | null
          assigned_to: string | null
          assigned_to_name: string | null
          created_by: string | null
          created_by_name: string | null
          source: string
          tags: string[] | null
          estimated_resolution_time: string | null
          actual_resolution_time: string | null
          customer_satisfaction_rating: number | null
          internal_notes: string | null
          public_notes: string | null
          attachments: Json | null
          created_at: string
          updated_at: string
          resolved_at: string | null
          closed_at: string | null
        }
        Insert: {
          id?: string
          ticket_number?: string
          title: string
          description: string
          status?: string
          priority?: string
          category: string
          customer_name: string
          customer_email: string
          customer_phone?: string | null
          assigned_to?: string | null
          assigned_to_name?: string | null
          created_by?: string | null
          created_by_name?: string | null
          source?: string
          tags?: string[] | null
          estimated_resolution_time?: string | null
          actual_resolution_time?: string | null
          customer_satisfaction_rating?: number | null
          internal_notes?: string | null
          public_notes?: string | null
          attachments?: Json | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
          closed_at?: string | null
        }
        Update: {
          id?: string
          ticket_number?: string
          title?: string
          description?: string
          status?: string
          priority?: string
          category?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string | null
          assigned_to?: string | null
          assigned_to_name?: string | null
          created_by?: string | null
          created_by_name?: string | null
          source?: string
          tags?: string[] | null
          estimated_resolution_time?: string | null
          actual_resolution_time?: string | null
          customer_satisfaction_rating?: number | null
          internal_notes?: string | null
          public_notes?: string | null
          attachments?: Json | null
          created_at?: string
          updated_at?: string
          resolved_at?: string | null
          closed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_assigned_to_fkey"
            columns: ["assigned_to"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "support_tickets_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ticket_comments: {
        Row: {
          id: string
          ticket_id: string
          author_id: string | null
          author_name: string
          author_type: string
          content: string
          is_internal: boolean
          attachments: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          ticket_id: string
          author_id?: string | null
          author_name: string
          author_type?: string
          content: string
          is_internal?: boolean
          attachments?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          ticket_id?: string
          author_id?: string | null
          author_name?: string
          author_type?: string
          content?: string
          is_internal?: boolean
          attachments?: Json | null
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_comments_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_comments_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      ticket_activities: {
        Row: {
          id: string
          ticket_id: string
          user_id: string | null
          user_name: string | null
          action: string
          details: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          ticket_id: string
          user_id?: string | null
          user_name?: string | null
          action: string
          details?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          ticket_id?: string
          user_id?: string | null
          user_name?: string | null
          action?: string
          details?: Json | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_activities_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
