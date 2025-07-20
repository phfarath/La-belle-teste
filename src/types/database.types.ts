export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          name: string;
          email: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          name: string;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      doctors: {
        Row: {
          id: number;
          name: string;
          specialty: string | null;
          credentials: string | null;
          bio: string | null;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          specialty?: string | null;
          credentials?: string | null;
          bio?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          specialty?: string | null;
          credentials?: string | null;
          bio?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
      };
      treatments: {
        Row: {
          id: number;
          slug: string;
          title: string;
          description: string | null;
          image_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          slug: string;
          title: string;
          description?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          slug?: string;
          title?: string;
          description?: string | null;
          image_url?: string | null;
          created_at?: string;
        };
      };
      appointments: {
        Row: {
          id: number;
          name: string;
          email: string;
          phone: string | null;
          preferred_date: string | null;
          preferred_time: string | null;
          message: string | null;
          status: string;
          user_id: string | null;
          treatment_id: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          email: string;
          phone?: string | null;
          preferred_date?: string | null;
          preferred_time?: string | null;
          message?: string | null;
          status?: string;
          user_id?: string | null;
          treatment_id?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          email?: string;
          phone?: string | null;
          preferred_date?: string | null;
          preferred_time?: string | null;
          message?: string | null;
          status?: string;
          user_id?: string | null;
          treatment_id?: number | null;
          created_at?: string;
        };
      };
      patient_records: {
        Row: {
          id: number;
          patient_id: string;
          doctor_id: number;
          record_date: string;
          description: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          patient_id: string;
          doctor_id: number;
          record_date?: string;
          description: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          patient_id?: string;
          doctor_id?: number;
          record_date?: string;
          description?: string;
          created_at?: string;
        };
      };
      suggestions: {
        Row: {
          id: number;
          patient_id: string;
          source_record_id: number | null;
          suggestion_text: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          patient_id: string;
          source_record_id?: number | null;
          suggestion_text: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          patient_id?: string;
          source_record_id?: number | null;
          suggestion_text?: string;
          created_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: number;
          slug: string;
          title: string;
          summary: string | null;
          content: string | null;
          image_url: string | null;
          published_date: string | null;
          author_id: number | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          slug: string;
          title: string;
          summary?: string | null;
          content?: string | null;
          image_url?: string | null;
          published_date?: string | null;
          author_id?: number | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          slug?: string;
          title?: string;
          summary?: string | null;
          content?: string | null;
          image_url?: string | null;
          published_date?: string | null;
          author_id?: number | null;
          created_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
